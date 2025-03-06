import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import newsData from "./newsData";

const LatestNews = () => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-screen max-w-3xl mx-auto px-3">
                {newsData.map((news) => (
                    <AccordionItem key={news.id} value={`item-${news.id}`}>
                        <AccordionTrigger>{news.title}</AccordionTrigger>
                        <AccordionContent>
                            {news.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion> 
        </div>
    )
}

export default LatestNews;