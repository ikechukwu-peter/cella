interface IPage {
  name: string;
  to: string;
}
export interface IHead {
  isOpen: boolean;
  onClose: any;
  pages: IPage[];
}
