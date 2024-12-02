type Game = {
    gameId: string;
    title: string;
    description: string;
    image: string;
    genre: string;
    links: {
      self: { href: string };
      image: { href: string };
    };
  };
  
type PaginationLinks = {
    self: { href: string };
    next?: { href: string };
    prev?: { href: string };
};

type GamesResponse = {
    games: Game[];
    links: PaginationLinks;
};