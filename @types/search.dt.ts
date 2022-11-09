import React from "react";

export interface ISearch {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  onClose: any;
}

export interface SearchAction {
  onChange: any;
}
