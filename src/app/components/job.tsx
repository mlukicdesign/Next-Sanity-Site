import Image from "next/image";
import { getJobs } from "../../../sanity.query";
import type { JobType } from "../../../types";

export default function Job() {
    const job: JobType[] = getJobs();

    return (
        <section className="mt-32">
            <div className="mb-16">
                <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
            </div>

            <div className="flex flex-col gap-y-12">
                {job.map((data) => (
                 <div key={data._id}
                 className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800">   
                 <a
                 href={data.url}
                 rel="noopener noreferrer"
                 className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
                 
                 </div>
                ))}
            </div>
        </section>
    )


}