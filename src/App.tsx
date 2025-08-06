import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import ProjectsPage from "./pages/projects";
import Blog from "./pages/blog";
import Subay from "./projects/subay";
import Payroll from "./projects/payroll";
import Ibrgy from "./projects/ibrgy";
import TaleMakers from "./projects/talemakers";
import AtHomes from "./projects/athomes";
import ICpEP from "./projects/icpep";
import CpExpress from "./projects/cpexpress";
import CpEngage from "./projects/cpengage";
import BBTime from "./projects/bbtime";
import CpEDays from "./projects/cpedays";
import GenAss from "./projects/genass";
import CpExpo from "./projects/cpexpo";
import ICpEPSE from "./projects/icpepse";
import UDA from "./projects/uda";
import MeInAOT from "./projects/meinaot";
import Pixels from "./projects/pixels";
import Videos from "./projects/videos";
import Photos from "./projects/photos";
import Blog1 from "./blogs/in-the-midst-of-silence";
import Blog2 from "./blogs/words-of-gratitude";
import Blog3 from "./blogs/storyboard-a-five-year-plan";
import Blog4 from "./blogs/have-i-not-breathed-for-a-moment";
import Blog5 from "./blogs/a-glimpse-of-my-future";
import Blog6 from "./blogs/the-gumamela-I-offered-to-mary";
import Blog10 from "./blogs/coins-for-the-child";
import Blog11 from "./blogs/alls-well-that-ends-well";
import Blog12 from "./blogs/i-know-that-i-know-nothing";
import Blog13 from "./blogs/dear-little-hope-looks-like-we-made-it";
import Blog14 from "./blogs/alls-well-that-ends-well-I-wish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects/subay" element={<Subay />} />
          <Route path="/projects/payroll" element={<Payroll />} />
          <Route path="/projects/ibrgy" element={<Ibrgy />} />
          <Route path="/projects/talemakers" element={<TaleMakers />} />
          <Route path="/projects/athomes" element={<AtHomes />} />
          <Route path="/projects/icpep" element={<ICpEP />} />
          <Route path="/projects/cpexpress" element={<CpExpress />} />
          <Route path="/projects/cpengage" element={<CpEngage />} />
          <Route path="/projects/bbtime" element={<BBTime />} />
          <Route path="/projects/cpedays" element={<CpEDays />} />
          <Route path="/projects/genass" element={<GenAss />} />
          <Route path="/projects/cpexpo" element={<CpExpo />} />
          <Route path="/projects/icpepse" element={<ICpEPSE />} />
          <Route path="/projects/uda" element={<UDA />} />
          <Route path="/projects/meinaot" element={<MeInAOT />} />
          <Route path="/projects/pixels" element={<Pixels />} />
          <Route path="/projects/videos" element={<Videos />} />
          <Route path="/projects/photos" element={<Photos />} />
          <Route path="/blogs/in-the-midst-of-silence" element={<Blog1 />} />
          <Route path="/blogs/words-of-gratitude" element={<Blog2 />} />
          <Route
            path="/blogs/storyboard-a-five-year-plan"
            element={<Blog3 />}
          />
          <Route
            path="/blogs/have-i-not-breathed-for-a-moment"
            element={<Blog4 />}
          />
          <Route path="/blogs/a-glimpse-of-my-future" element={<Blog5 />} />
          <Route
            path="/blogs/the-gumamela-I-offered-to-mary"
            element={<Blog6 />}
          />
          <Route path="/blogs/coins-for-the-child" element={<Blog10 />} />
          <Route path="/blogs/alls-well-that-ends-well" element={<Blog11 />} />
          <Route
            path="/blogs/i-know-that-i-know-nothing"
            element={<Blog12 />}
          />
          <Route
            path="/blogs/dear-little-hope-looks-like-we-made-it"
            element={<Blog13 />}
          />
          <Route
            path="/blogs/alls-well-that-ends-well-I-wish"
            element={<Blog14 />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
