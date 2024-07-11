// Define the types of the application

import { PortableTextBlock } from "sanity";

// PortableTextBlock is a type that properly defines data type for the rich text editor

export type ProfileType = {
    _id: string,
    fullName: string,
    headline: string,
    profileImage: {
        alt: string,
        image: string
    },
    shortBio: string,
    email: string,
    fullBio: PortableTextBlock[],
    location: string,
    resumeURL: string,
    socialLinks: string[],
    skills: string[],
}