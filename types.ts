export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  bgColor: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum TagColor {
  LIME = 'bg-lime-300',
  PURPLE = 'bg-purple-300',
  ORANGE = 'bg-orange-300',
  BLUE = 'bg-cyan-300',
  PINK = 'bg-pink-300',
  YELLOW = 'bg-yellow-300'
}