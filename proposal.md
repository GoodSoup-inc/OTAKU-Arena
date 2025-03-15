# OTAKU Arena

Created by Tyron O. and Taylor M.

## 🚀 Mission statement

Our application, OTAKU Arena, is for anime lover of all kind. It allows users to decide who is the strongest in all of the anime universe. This application would put an end to the question 'Who would win' in a fun and exciting way

## API & React Router

This application will use the Jikan API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: https://docs.api.jikan.moe/

- https://api.jikan.moe/v4/characters/{id}
  - This will allow us to an anime MC's image

```
{
  "data": {
  "mal_id": 0,
  "url": "string",
  "images": {},
  "name": "string",
  "name_kanji": "string",
  "nicknames": [],
  "favorites": 0,
  "about": "string"
}
}
```

- https://api.jikan.moe/v4/characters/{id}/anime
- This endpoint will get us the name of the MCs anime

```
{
  "data": [
        {
            "role": "string",
            "anime": {
                        "mal_id": 0,
                        "url": "string",
                        "images": {},
                        "title": "string"
                      }
                  }
            ]
    }

```

- https://api.jikan.moe/v4/random/manga
- This will give us a random manga

```
{
  "data": {
  "mal_id": 0,
  "url": "string",
  "images": {},
  "approved": true,
  "titles": [],
  "title": "string",
  "title_english": "string",
  "title_japanese": "string",
  "type": "Manga",
  "chapters": 0,
  "volumes": 0,
  "status": "Finished",
  "publishing": true,
  "published": {},
  "score": 0,
  "scored_by": 0,
  "rank": 0,
  "popularity": 0,
  "members": 0,
  "favorites": 0,
  "synopsis": "string",
  "background": "string",
  "authors": [],
  "serializations": [],
  "genres": [],
  "explicit_genres": [],
  "themes": [],
  "demographics": []
  }
  }

```

[If your API requires an API key, say so here.]

**Example:**

- https://api.artic.edu/api/v1/artworks
  - This will fetch an array of artwork objects
  - For each artwork, I want the `id`, `title`, and `image_id`
- https://api.artic.edu/api/v1/artworks/{id}
  - This will fetch a single artwork object
  - I will use the `id`, `title`, `short_description`, `medium_display`, `place_of_origin` and `image_id`
- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
  - For each artwork, I will use the `id` and `title`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

- On the `/example` page, users can...
- On the `/example` page, users can...
- On the `/example` page, users can...

**Example:**

- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- Users will be able to...
- Users will be able to...
- Users will be able to...

**Example:**

- Users will be able to save and view favorited artworks using local storage
- Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 2**

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 3** (MVP due by the end of the day)

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 4**

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 5**

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
