import Membership from "@/components/Membership";
import News from "@/components/News";
import Sponsors from "@/components/Sponsors";

export default function contactPage() {

    return (
        <main>
            <header>
                <h1>Contact us for More Information</h1>
            </header>

            <section><br />
                <b><h3>Mailing Address</h3></b>
                <p>
                    Bicycle Newfoundland and Labrador <br />
                    PO BOX 93, STN C <br />
                    St. John’s, NL <br />
                    A1C 5H5 <br />

                </p>
            </section>

            <section><br />
                <b>General Inquires</b><br />
                info@bicyclenl.com<br />

                <b>President</b><br />
                president@bicyclenl.com<br />
            </section><br />

            <b><h2>Board of Directors</h2></b>
            <p>The Board of Bicycle Newfoundland and Labrador (BNL)
                is composed of a province-wide volunteer board of directors.
                <br />Each of the directors has been assigned a specific area
                of responsibility within the organization.</p><br />
            <h2>Current Board:</h2>
            <table>
                <thead>
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>President</td>
                    <td>Kim Furlong</td>
                </tr>
                <tr>
                    <td>Secretary</td>
                    <td>Greg Collins (Acting)</td>
                </tr>
                <tr>
                    <td>Treasurer</td>
                    <td>Gillian Russell</td>
                </tr>
                <tr>
                    <td>Director Coaching</td>
                    <td>John Hancock</td>
                </tr>
                <tr>
                    <td>Director Inclusion</td>
                    <td>Kevin Flynn</td>
                </tr>
                <tr>
                    <td>Director Events</td>
                    <td>Rob Pittman</td>
                </tr>
                <tr>
                    <td>Director Community Transport & Advocacy</td>
                    <td>Elizabeth Yeoman</td>
                </tr>
                <tr>
                    <td>Director at Large</td>
                    <td>Greg Collins</td>
                </tr>
                <tr>
                    <td>Director at Large</td>
                    <td>Ryan Butt</td>
                </tr>
                </tbody>
            </table>
            <br />

            <Membership /><br />
            <News /><br />
            <Sponsors /><br />

        </main>
    );
}