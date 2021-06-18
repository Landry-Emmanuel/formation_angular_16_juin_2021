import { HttpClientModule } from "@angular/common/http";
import { FakeCatalogService } from "../services/FakeCatalogService";
import { ICatalogServiceDIToken } from "../services/ICatalogService";

export const TEST_CONFIG_MODULE:any = {
    imports: [
        HttpClientModule
    ], 
}