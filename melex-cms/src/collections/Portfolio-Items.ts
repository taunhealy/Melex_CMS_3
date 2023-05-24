import { CollectionConfig } from "payload/types";

const PortfolioItems: CollectionConfig = {
    slug: 'portfolio-items',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Client Name (eg. Joanne & John)',
            required: true,
        },
        {
            name: 'location',
            type: 'text',
            required: true,
            label: 'Venue Name',
        },
        {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Thumbnail Image',
        },
    ]
}

export default PortfolioItems;