import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITab } from "./types/Tabs";

const tabs: ITab[] = [
  {
    id: 1,
    label: "Development",
    value: "dev",
    bookmarks: [
      {
        id: 1,
        label: "Github",
        href: "https://github.com/",
      },
      {
        id: 2,
        label: "Next.js",
        href: "https://nextjs.org/",
      },
    ],
  },
  {
    id: 2,
    label: "Entertaining",
    value: "entertaining",
    bookmarks: [
      {
        id: 2,
        label: "Github",
        href: "https://github.com/",
      },
    ],
  },
  {
    id: 4,
    label: "Games",
    value: "games",
    bookmarks: [
      {
        id: 1,
        label: "TopFile",
        href: "https://github.com/",
      },
    ],
  },
  {
    id: 3,
    label: "Study",
    value: "study",
    bookmarks: [
      {
        id: 3,
        label: "Github",
        value: "github",
        href: "https://github.com/",
      },
    ],
  },
];

export default function App() {
  return (
    <main className="container mx-auto">
      <Tabs defaultValue={tabs[0].value} className="p-4 text-xl">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.value}>
            <ul>
              {tab.bookmarks.map((bookmark) => (
                <li key={bookmark.id}>
                  <a target="_blank" href={bookmark.href}>
                    {bookmark.label}
                  </a>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
