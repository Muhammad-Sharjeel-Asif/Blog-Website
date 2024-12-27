export const author = {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: { source: 'name', maxLength: 96 },
      },
      {
        name: 'image',
        type: 'image',
        title: 'Profile Picture',
        options: { hotspot: true },
      },
      {
        name: 'bio',
        type: 'array',
        title: 'Biography',
        of: [{ type: 'block' }],
      },
    ],
  };
  