import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  });

  if (profile) {
    return profile;
  }

  const email = user.emailAddresses[0]?.emailAddress;

  if (!email) {
    throw new Error("No email address found for this user account.");
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: [user.firstName, user.lastName].filter(Boolean).join(" ") || user.username || "User",
      imageUrl: user.imageUrl,
      email,
    }
  });

  return newProfile;
};
