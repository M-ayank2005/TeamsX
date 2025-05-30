"use client"

import axios from "axios"
import qs from "query-string"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Plus, SmileIcon } from "lucide-react"
import { useModal } from "@/hooks/use-modal-store"
import { EmojiPicker } from "@/components/emoji-picker"
import { useRouter } from "next/navigation"
const sentAudioPath = "/sent.mp3"; 

interface ChatInputProps {
  apiUrl: string
  query: Record<string, any>
  name: string
  type: "conversation" | "channel"
}

const formSchema = z.object({
  content: z.string().min(1),
})

export const ChatInput = ({ apiUrl, query, name, type }: ChatInputProps) => {
  const { onOpen } = useModal()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    }
  })

  const isLoading = form.formState.isSubmitting

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: apiUrl,
        query,
      })

      await axios.post(url, values)
      
      // Play sound when message is sent successfully
      const audio = new Audio(sentAudioPath);
      audio.play().catch(err => console.error("Error playing sound:", err));
      
      form.reset()
      router.refresh()
    } catch (error) {
      console.log(error)
    }   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <FormField 
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative p-4 pb-6">
                  <button 
                    type="button" 
                    onClick={() => onOpen("messageFile", { apiUrl, query })} 
                    className="absolute top-7 left-8 h-[24px] w-[24px]
                    bg-blue-500 dark:bg-sky-400 hover:bg-sky-600
                    dark:hover:bg-sky-300 transition rounded-full p-1 flex
                    items-center justify-center"
                  >
                    <Plus className="text-pink-50"/>
                  </button>
                  <Input 
                    disabled={isLoading}
                    className="px-14 py-6 bg-green-100/70
                    dark:bg-zinc-700/75 border-[1px] border-green-400 dark:border-[1px] dark:border-sky-500
                    focus-visible:ring-0 focus-visible:ring-offset-0
                    text-zinc-600 dark:text-zinc-200"
                    placeholder={`Your message ${type === "conversation" ? name : "#" + name}`}
                    {...field}
                  />
                    <div className="absolute top-7 right-24">
                    <EmojiPicker 
                      onChange={(emoji: string) => field.onChange(`${field.value} ${emoji}`)}
                    />
                    </div>
                    <div className="absolute top-6 right-8">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="h-auto w-auto bg-green-500 dark:bg-sky-400 hover:bg-sky-600 dark:hover:bg-sky-300 transition rounded-md p-1 px-2 flex items-center justify-center"
                    >
                      Send
                    </button>
                    </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>      
    </Form>
  )
}