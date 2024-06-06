export interface CryptoCurrency {
    id:        string;
    name:      string;
    symbol:    string;
    rank:      number;
    is_new:    boolean;
    is_active: boolean;
    type:      string;
}

export interface CryptoCurrencyDetailsResponse {
    code: string;
    data: CryptoCurrencyDetails;
}

export interface CryptoCurrencyDetails {
    time:             number;
    symbol:           string;
    buy:              string;
    sell:             string;
    changeRate:       string;
    changePrice:      string;
    high:             string;
    low:              string;
    vol:              string;
    volValue:         string;
    last:             string;
    averagePrice:     string;
    takerFeeRate:     string;
    makerFeeRate:     string;
    takerCoefficient: string;
    makerCoefficient: string;
}