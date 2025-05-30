/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";

export async function getComponentMap(sections:any) {
  return new Promise(async (resolve) => {
    const map:any = {};
    for (let i = 0; i < sections.length; i++) {
      if(!sections[i].template){
        continue;
      }
      const section = sections[i];
      const template = section.template.doc;
      const templateFileName = template.name.replace(/[A-Z]/g, function (match: string) {
        return '-' + match.toLowerCase();
      });
      map["section" + i] = import(
        `./../components/plugins/richjava_about-basic/templates/${template.category}/${templateFileName}.tsx`
      );
    }
    resolve(map);
  });
}

export function getComponents(sections: any): Promise<React.ComponentType[]> {
  return new Promise((resolve) => {
    getComponentMap(sections).then((map: any) => {
      const comps: React.ComponentType[] = [];
      for (const key of Object.keys(map)) {
        const comp = dynamic(() => map[key], {
          loading: () => null
        });
        comps.push(comp);
      }
      resolve(comps);
    });
  });
}

export const widthForImage = (source: any) =>
source?.width

export const heightForImage = (source: any) =>
source?.height

export const collectionSlug = (entry: any) =>
entry._type ? entry._type.replace(/[A-Z]/g, (letter:any) => `-${letter.toLowerCase()}`) : '';

export const entrySlug = (entry: any) => entry && entry.slug && entry.slug.current ? entry.slug.current : entry.slug;
