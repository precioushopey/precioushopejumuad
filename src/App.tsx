import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Shell } from "./components/shell/Shell";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
const About = lazy(() => import("./pages/about"));
import ProfilePage from "./pages/profile";
import ProjectsPage from "./pages/projects";
import Blog from "./pages/blog";
const Subay = lazy(() => import("./projects/subay"));
const Payroll = lazy(() => import("./projects/payroll"));
const OjtConnect = lazy(() => import("./projects/ojtconnect"));
const Roote = lazy(() => import("./projects/roote"));
const WeCare = lazy(() => import("./projects/wecare"));
const SanoVida = lazy(() => import("./projects/sanovida"));
const Coco = lazy(() => import("./projects/coco"));
const Roostercat = lazy(() => import("./projects/roostercat"));
const Ibrgy = lazy(() => import("./projects/ibrgy"));
const TaleMakers = lazy(() => import("./projects/talemakers"));
const AtHomes = lazy(() => import("./projects/athomes"));
const ICpEP = lazy(() => import("./projects/icpep"));
const CpExpress = lazy(() => import("./projects/cpexpress"));
const CpEngage = lazy(() => import("./projects/cpengage"));
const BBTime = lazy(() => import("./projects/bbtime"));
const CpEDays = lazy(() => import("./projects/cpedays"));
const GenAss = lazy(() => import("./projects/genass"));
const CpExpo = lazy(() => import("./projects/cpexpo"));
const ICpEPSE = lazy(() => import("./projects/icpepse"));
const UDA = lazy(() => import("./projects/uda"));
const MeInAOT = lazy(() => import("./projects/meinaot"));
const Pixels = lazy(() => import("./projects/pixels"));
const Videos = lazy(() => import("./projects/videos"));
const Photos = lazy(() => import("./projects/photos"));
const Blog1 = lazy(() => import("./blogs/in-the-midst-of-silence"));
const Blog2 = lazy(() => import("./blogs/words-of-gratitude"));
const Blog3 = lazy(() => import("./blogs/storyboard-a-five-year-plan"));
const Blog4 = lazy(() => import("./blogs/have-i-not-breathed-for-a-moment"));
const Blog5 = lazy(() => import("./blogs/a-glimpse-of-my-future"));
const Blog6 = lazy(() => import("./blogs/the-gumamela-I-offered-to-mary"));
const Blog11 = lazy(() => import("./blogs/coins-for-the-child"));
const Blog12 = lazy(() => import("./blogs/alls-well-that-ends-well"));
const Blog13 = lazy(() => import("./blogs/i-know-that-i-know-nothing"));
const Blog14 = lazy(
  () => import("./blogs/dear-little-hope-looks-like-we-made-it"),
);
const Blog15 = lazy(() => import("./blogs/alls-well-that-ends-well-I-wish"));
const Blog16 = lazy(() => import("./blogs/i-passed-the-cse-exam"));
const PrivacyPage = lazy(() => import("./pages/privacy"));

function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route element={<Shell />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects/subay" element={<Subay />} />
            <Route path="/projects/ojtconnect" element={<OjtConnect />} />
            <Route path="/projects/roote" element={<Roote />} />
            <Route path="/projects/wecare" element={<WeCare />} />
            <Route path="/projects/sanovida" element={<SanoVida />} />
            <Route path="/projects/coco" element={<Coco />} />
            <Route path="/projects/roostercat" element={<Roostercat />} />
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
            <Route path="/blogs/coins-for-the-child" element={<Blog11 />} />
            <Route
              path="/blogs/alls-well-that-ends-well"
              element={<Blog12 />}
            />
            <Route
              path="/blogs/i-know-that-i-know-nothing"
              element={<Blog13 />}
            />
            <Route
              path="/blogs/dear-little-hope-looks-like-we-made-it"
              element={<Blog14 />}
            />
            <Route
              path="/blogs/alls-well-that-ends-well-I-wish"
              element={<Blog15 />}
            />
            <Route path="/blogs/i-passed-the-cse-exam" element={<Blog16 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
