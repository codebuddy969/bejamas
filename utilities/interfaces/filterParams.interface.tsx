export interface IFilterParams {
    visible: Boolean;
    setFilterVisibility: Function;
}

export interface IApiRequestCategories {
    id: String;
    status: Boolean;
}

export interface IApiRequestSorting {
    sorting: String;
}

export interface IApiRequestRange {
    id: String;
    status: Boolean;
}

export interface IApiRequestOrder {
    order: String;
}

export interface IApiRequestParams {
    categories: String[];
    sorting: String;
    range: String[];
    order: String;
}
