import { ApiDataItem } from "../../interfaces/tables/TableType";
const formatApiDataFlexible = <T>(
    data: ApiDataItem[],
    config: { [key: string]: (item: ApiDataItem) => any }
): T[] => {
    return data.map((item) => {
        const formattedItem: any = {};
        for (const key in config) {
            if (config.hasOwnProperty(key)) {
                formattedItem[key] = config[key](item);
            }
        }
        for (const key in item) {
            if (!formattedItem.hasOwnProperty(key)) {
                formattedItem[key] = item[key];
            }
        }
        return formattedItem;
    });
};

export default formatApiDataFlexible;