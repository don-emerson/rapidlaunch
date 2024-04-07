import Balance from "react-wrap-balancer";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { siteUrls } from "@/config/urls";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { HighlightTabs } from "@/app/(app)/_components/highlight-tabs";
import { getRepoStars } from "@/server/actions/github";

export default async function HomePage() {
    const repoStars = await getRepoStars();

    return (
        <div className="container flex flex-col items-center justify-center gap-4 py-20">
            <Link
                href={siteUrls.twitter}
                className="flex items-center space-x-2 rounded-md bg-secondary px-3 py-2 text-sm hover:bg-secondary/80"
            >
                <span>🎉</span>
                <span className="font-medium">
                    RapidLaunch is in development. Follow our progress on 𝕏
                    (formally Twitter)
                </span>
                <ExternalLinkIcon className="h-4 w-4 flex-shrink-0" />
            </Link>
            <Balance
                as="h1"
                className="text-center font-heading text-3xl font-bold sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
            >
                Rapidly launch your MVP with Beautiful Starterkits, Blocks, and
                more.
            </Balance>
            <Balance
                as="p"
                className="text-center text-muted-foreground sm:text-xl"
            >
                Elevate your development game with Rapidlaunch! Launch your apps
                faster with our SaaS starterkits, components, building guides,
                and more. Customizable. Open Source.
            </Balance>
            <div className="flex items-center gap-4">
                <Link
                    href={siteUrls.docs}
                    className={buttonVariants({
                        className: "flex items-center gap-2",
                    })}
                >
                    Early Access
                </Link>
                <Link
                    href={siteUrls.github}
                    className={buttonVariants({
                        className: "flex items-center",
                        variant: "outline",
                    })}
                >
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    Github -
                    <span className="ml-1 flex items-center font-normal text-muted-foreground">
                        {repoStars}
                    </span>
                </Link>
            </div>

            <HighlightTabs className="mt-36" />
        </div>
    );
}
