import { AppPageShell } from "@/app/(app)/_components/page-shell";
import { userFeedbackPageConfig } from "@/app/(app)/(user)/feedback/_constants/page-config";
import { CreateFeedbackForm } from "@/app/(app)/(user)/feedback/_components/create-feedback-form";
import { getUserFeedbacksQuery } from "@/server/actions/feedback/queries";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { FeedbackDropdown } from "@/app/(app)/(user)/feedback/_components/feedback-dropdown";

export default async function UserFeedbackPage() {
    const feedbacks = await getUserFeedbacksQuery();

    return (
        <AppPageShell
            title={userFeedbackPageConfig.title}
            description={userFeedbackPageConfig.description}
        >
            <div className="flex w-full items-start justify-between">
                <h2 className="text-lg font-medium">
                    {feedbacks.length} feedbacks you have created.
                </h2>

                <CreateFeedbackForm />
            </div>

            <div className="grid gap-4">
                {feedbacks.length > 0 ? (
                    feedbacks.map((feedback) => (
                        <Card key={feedback.id} className="relative">
                            <FeedbackDropdown {...feedback} />

                            <CardContent className="grid gap-3 p-6">
                                <CardTitle>{feedback.title}</CardTitle>
                                <CardDescription>
                                    {feedback.message}
                                </CardDescription>
                                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                                    {format(
                                        new Date(feedback.createdAt),
                                        "PPP",
                                    )}
                                </p>
                                <Badge
                                    variant="outline"
                                    className="w-fit rounded-[0.25rem]"
                                >
                                    {feedback.label}
                                </Badge>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="flex w-full flex-col items-center justify-center gap-4 py-10">
                        <p className="font-medium text-muted-foreground">
                            No feedbacks found.
                        </p>
                        <p className="text-muted-foreground">
                            Create a feedback using the form above, your
                            feedback is important to us. 🚀
                        </p>
                    </div>
                )}
            </div>
        </AppPageShell>
    );
}
