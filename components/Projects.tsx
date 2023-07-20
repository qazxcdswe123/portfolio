import { siteConfig } from "@/config/SiteConfig";
import { getGitHubStars } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "@/components/Icons";


interface ProjectCardProps {
  projectURI: string;
  description: string;
  idx: number;
}

async function ProjectCard(props: ProjectCardProps) {
  const stars = await getGitHubStars(props.projectURI);
  const link = "https://github.com/" + props.projectURI;
  return (
    <Card key={props.idx}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <Link href={"https://github.com/" + props.projectURI}
                  target="_blank" rel="noreferrer">
              <Icons.GitHub className="" />
            </Link>

            <Link className="underline underline-offset-4" href={link} target="_blank" rel="noreferrer">
              {props.projectURI.split("/")[1]}
            </Link>

            <div className="flex">
              {stars} <Icons.star />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-4 text-lg">
        <p>{props.description}</p>
      </CardContent>
    </Card>
  );
}

export async function Projects() {
  const data = siteConfig.githubProjects;

  return (
    data.map(((project, idx) => (
      <ProjectCard projectURI={project.projectURI} description={project.description} idx={idx} />
    )))
  );
}
