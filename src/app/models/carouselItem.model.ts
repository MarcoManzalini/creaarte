export interface HomeTabItem {
  name: string;
  items: tabItem[];
}

export interface tabItem {
  url: string;
  phoneUrl?:string;
  name: string;
  buttonText?: string;
  subText: string;
}
