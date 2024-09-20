import React from 'react';

interface TitleSectionProps {
    title: string;
    subheading?: string;
    pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
    title,
    subheading,
    pill,
}) => {
    return (
        <React.Fragment>
            <section
                className="flex
                flex-col
                gap-4
                justify-center
                items-center
                md:items-center
                text-center
            ">
                <article
                    className="rounded-full
                    p-[1px]
                    text-md
                    bg-gradient-to-r
                    from-yellow-200
                    to-primary
                    mb-6
                    mt-4
                ">
                    <div
                        className="rounded-full 
                        px-3
                        py-1
                        dark:bg-background bg-background"
                    >
                    {pill}
                    </div>
                </article>
                {subheading ? (
                    <>
                    <h2
                        className="text-center
                        text-3xl
                        sm:text-5xl
                        sm:max-w-[750px] max-w-[700px]
                        md:text-center
                        font-semibold
                    ">
                        {title}
                    </h2>
                    <p
                        className="dark:text-primary/80 max-w-[400px] sm:max-w-[450px]
                        md:text-center text-center mt-2
                    ">
                        {subheading}
                    </p>
                    </>
                ) : (
                    <h1
                        className=" text-center 
                        text-4xl
                        sm:text-6xl
                        sm:max-w-[850px] max-w-[800px]
                        md:text-center
                        font-semibold
                    ">
                        {title}
                    </h1>
                )}
            </section>
        </React.Fragment>
    );
};

export default TitleSection;