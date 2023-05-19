import {render, screen} from "@testing-library/react";
import Footer from "../Footer";
import {MemoryRouter} from "react-router";
import FooterColumnInformation from "../FooterColumnInformation/FooterColumnInformation";

describe('Footer', () => {
    it('should contain', () => {
        render(<Footer/>, {wrapper: MemoryRouter});
        expect(screen.getAllByRole('list').map((list) => list.textContent)).toStrictEqual([
            "HELP & INFORMATIONHelpTrack orderDelivery & returnsSitemap",
            "ABOUT ASOSAbout AsosCareers at ASOSCorporate responsibilityInvestors' site",
            "MORE FROM ASOSMobile and ASOS appsASOS MarketplaceGift vouchersBlack FridayASOS x Thrift+",
            "SHOPPING FROM:"
        ]);
    });
})
