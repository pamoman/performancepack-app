/*
 * Content - Controller
 */

import { ContentBlockController } from '@components/Blocks/Content';
import { Box } from '@mui/material';

let articleBlocks = [];
let sectionBlocks = [];

const resetArticle = () => {
    articleBlocks = [];
};

const resetSection = () => {
    sectionBlocks = [];
};

const resetAll = () => {
    articleBlocks = [];
    sectionBlocks = [];
};

const Article = ({ children }) => {
    return (
        <Box component="article">{children}</Box>
    )
};

const Section = ({ children }) => {
    return (
        <Box component="section">{children}</Box>
    )
};

const getHeadingType = ({ __typename, settings }) => {
    const isHeading = __typename === "ComponentContentHeading";

    if (isHeading) {
        return settings?.component ?? "h2";
    }

    return "";
}

/*
 * Finish the build, last available block.
 */
const finalizeBuild = ({ Block, hasArticleBlocks, hasSectionBlocks }) => {
    let content, finishedArticle, finishedSection;

    switch (true) {
        /* First finish the active section then finish the active article */
        case hasArticleBlocks && hasSectionBlocks:
            sectionBlocks.push(Block);

            finishedSection = <Section>{sectionBlocks}</Section>;

            articleBlocks.push(finishedSection);

            finishedArticle = <Article>{articleBlocks}</Article>;

            content = finishedArticle;
            break;
        /* Finish active section  */
        case hasSectionBlocks:
            sectionBlocks.push(Block);

            finishedSection = <Section>{sectionBlocks}</Section>;

            content = finishedSection;
            break;
        /* Finish the active article */
        case hasArticleBlocks:
            articleBlocks.push(Block);

            finishedArticle = <Article>{articleBlocks}</Article>;

            content = finishedArticle;
            break;
        /* No active articles or sections so just return the last block */
        default:
            content = Block;
            break;
    }

    resetAll();

    return content;
};

/*
 * Build a new article, ending all active sections and/or the current article
 */
const buildNewArticle = ({ Block, hasArticleBlocks, hasSectionBlocks }) => {
    let content, finishedArticle, finishedSection;

    switch (true) {
        /* First finish the active section then finish the active article */
        case hasArticleBlocks && hasSectionBlocks:
            finishedSection = <Section>{sectionBlocks}</Section>;

            articleBlocks.push(finishedSection);

            finishedArticle = <Article>{articleBlocks}</Article>;

            content = finishedArticle;

            resetAll();

            articleBlocks.push(Block);
            break;
        /* Finish the active section then start an article */
        case hasSectionBlocks:
            finishedSection = <Section>{sectionBlocks}</Section>;

            content = finishedSection;

            resetSection();

            articleBlocks.push(Block);
            break;
        /* Finish the current article before starting a new one */
        case hasArticleBlocks:
            finishedArticle = <Article>{articleBlocks}</Article>;

            content = finishedArticle;

            resetArticle();

            articleBlocks.push(Block);
            break;
        /* No active sections or article so just start a new article */
        default:
            articleBlocks.push(Block);
            break;
    }

    return content;
};

/*
 * Build a new section, ending the active section if present
 */
const buildNewSection = ({ Block, hasArticleBlocks, hasSectionBlocks }) => {
    let content, finishedSection;

    switch (true) {
        /* Finish the active section, add it to the active article then start a new section */
        case hasArticleBlocks && hasSectionBlocks:
            finishedSection = <Section>{sectionBlocks}</Section>;

            articleBlocks.push(finishedSection);

            resetSection();

            sectionBlocks.push(Block);

            break;
        /* Finish the active session then start a new one */
        case hasSectionBlocks:
            finishedSection = <Section>{sectionBlocks}</Section>;

            content = finishedSection;

            resetSection();

            sectionBlocks.push(Block);

            break;
        /* No active section present so just start a new one */
        default:
            sectionBlocks.push(Block);
            break;
    }

    return content;
}

/*
 * Build upon the active section or article otherwise just return the block untouched
 */
const build = ({ Block, hasArticleBlocks, hasSectionBlocks }) => {
    let content;

    switch (true) {
        /* Add to the active section if there is one */
        case hasSectionBlocks:
            sectionBlocks.push(Block);
            break;
        /* Add to the active article when there is no active section */
        case hasArticleBlocks:
            articleBlocks.push(Block);
            break;
        /* 
         * There are no active sections or articles.  The block is not a heading
         * so no section or article should be built, therefore just return the block untouched
        */
        default:
            content = Block;
            break;
    }

    return content;
}

const contentBlock = ({ Block, isLastBlock, __typename, settings }) => {
    const headingType = getHeadingType({ __typename, settings });

    const buildProps = {
        hasArticleBlocks: articleBlocks.length > 0,
        hasSectionBlocks: sectionBlocks.length > 0
    };

    let content;

    switch (true) {
        case isLastBlock:
            content = finalizeBuild({ Block, ...buildProps });
            break;
        case headingType === "h2":
            content = buildNewArticle({ Block, ...buildProps });
            break;
        case headingType === "h3":
            content = buildNewSection({ Block, ...buildProps });
            break;
        default:
            content = build({ Block, ...buildProps });
            break;
    }

    return content;
};

const PamoContentController = ({ blocks = [] }) => {
    return (
        <>
            {blocks.map((block, i) => {
                const Block = <ContentBlockController {...block} index={i} />;
                const { props } = Block || {};
                const isLastBlock = blocks.length === (i + 1);
        
                return contentBlock({ Block, isLastBlock, ...props });
            })}
        </>
    );
};

export default PamoContentController;