export interface IFilterParams {
    visible: Boolean;
    setFilterVisibility: Function;
}

export interface IApiRequestCategories {
    id: String;
    status: Boolean;
}

export interface IApiRequestRange {
    id: String;
    status: Boolean;
}

export interface IApiRequestParams {
    categories: String[];
    sorting: String;
    range: String[];
    order: String;
    page: Number;
    touched: Boolean;
}
