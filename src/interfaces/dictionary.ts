interface ISectionInnovate {
  title: string;
  description: string;
  buttonExplore: string;
  buttonContact: string;
}
interface IHomeView {
  sectionInnovate: ISectionInnovate;
}
interface ITraslation {
  homeView: IHomeView;
}
export interface IDictionary {
  es: ITraslation;
  en: ITraslation;
}
