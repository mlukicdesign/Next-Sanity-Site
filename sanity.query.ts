// Construct Main Query for Sanity

import { groq } from "next-sanity";
import client from "./sanity.client";


// async function that returns groq fetch query wrapped with the client config.
// This function will be used to fetch the profile data from Sanity.

export async function getProfile() {
    return client.fetch(
        groq`*[_type == "profile"]{
          _id,
          fullName,
          headline,
          profileImage {alt, "image": asset->url},
          shortBio,
          location,
          fullBio,
          email,
          "resumeURL": resumeURL.asset->url,
          socialLinks,
          skills
        }`
      );
    }

    export async function getJobs() {
      return client.fetch(
          groq`*[_type == "job"]{
            _id,
            name,
            jobTitle,
            logo {alt, "image": asset->url},
            url,
            description,
            startDate,
            endDate,
          }`
        );
    }