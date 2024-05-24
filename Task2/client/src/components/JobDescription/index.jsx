import Skills from "../Skills";

export default function JobDescription() {
  return (
    <div className="flex flex-row justify-between">
      <div className=" border w-8/12 mt-4 bg-slate-50 p-5">
        <h1 className="text-2xl font-semibold my-5">About Internship</h1>
        <h2 className="text-xl font-normal my-5">Overview </h2>
        <p>
          We are looking for a talented Backend Engineer specializing in app
          development to join our dynamic team. The ideal candidate will have a
          strong background in backend development using Node.js, with a focus
          on building robust APIs and backend systems to support mobile
          applications. In addition to technical proficiency, we value
          individuals who possess a deep understanding of user experience and
          empathy, as they play a crucial role in enhancing the overall app
          building process
        </p>

        <h2 className="text-xl font-normal my-5">Responsibilities</h2>

        <ul className="list px-5">
          <li>
            Design, develop, and maintain backend systems and APIs to support
            mobile applications, ensuring scalability, reliability, and
            performance.
          </li>
          <li>
            Collaborate with cross-functional teams including frontend
            developers, designers, and product managers to understand
            requirements and translate them into technical specifications.
          </li>
          <li>
            Conduct user research and analysis to gain insights into user
            behaviour and preferences, leveraging this information to enhance
            the app building process.
          </li>
          <li>
            Implement best practices for security, authentication, and data
            protection in backend systems.
          </li>
          <li>
            Optimize backend performance and scalability to accommodate growing
            user bases and data volumes.
          </li>
          <li>
            Participate in code reviews, architectural discussions, and
            technical documentation to ensure high code quality and
            maintainability.
          </li>
          <li>
            Stay updated with the latest trends and advancements in backend
            development, recommending improvements and enhancements as needed.
          </li>
          <li>
            Troubleshoot and debug issues in production environments, ensuring
            timely resolution and minimal disruption to app functionality.
          </li>
        </ul>

        <h2 className="text-xl font-normal my-5">Requirements</h2>
        <ul className="list px-5">
          <li>
            Proven experience in building backend systems and APIs for mobile
            applications, with a solid understanding of RESTful principles.
          </li>
          <li>
            Ability to conduct user research and analysis, with a strong
            emphasis on user empathy and understanding of user experience
            principles.
          </li>
          <li>Familiarity with PostgreSQL database technologies</li>
          <li>
            Experience with cloud platforms (e.g., AWS, Google Cloud) and
            containerisation technologies (e.g., Docker, Kubernetes) is a plus.
          </li>
          <li>
            Strong problem-solving skills and ability to think critically under
            pressure.
          </li>
          <li>
            Excellent communication and collaboration skills, with the ability
            to work effectively in a cross-functional team environment.
          </li>
          <li>
            Passion for learning and a drive to stay updated with the latest
            industry trends and advancements in backend development.
          </li>
        </ul>
      </div>
      <div className="border h-fit w-96 mt-4 bg-slate-50 p-5">
        <h1 className="text-2xl font-semibold my-5">Skills - Mandatory</h1>
        <Skills />
      </div>
    </div>
  );
}
