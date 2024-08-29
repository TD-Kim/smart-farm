import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Asinfo from "./components/Mypage/asinfo/Asinfo";
import Chatbot from "./components/Mypage/chatbot/Chatbot";
import Myinfo from "./components/Mypage/myinfo/Myinfo";
import Myletter from "./components/Mypage/myletter/Myletter";
import Mymain from "./components/Mypage/mymain/Mymain";
import Payment from "./components/Mypage/payment/Payment";
import Userout from "./components/Mypage/userout/Userout";
import PostView from "./components/board/post-view/PostView";
import Layout from "./components/layout/Layout";
import CommunityMenu from "./context/CommunityMenu";
import { ComponentProvider } from "./context/ComponentContext";
import InfoMenu from "./context/InfoMenu";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchEm from "./pages/LoginPage/searchEm/SearchEm";
import SearchPw from "./pages/LoginPage/searchPw/SearchPw";
import MyPage from "./pages/MyPage/MyPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import About from "./pages/about/About";
import Service from "./pages/about/Service";
import Community from "./pages/community/Community";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import Manager from "./pages/manager/Manager";
import MyFarm from "./pages/my-farm/MyFarm";
import FarmList from "./pages/my-farm/my-farm-list/FarmList";
import DashBoard from "./pages/my-farm/my-farm-list/dashboard/DashBoard";
import RenderingMenu from "./pages/my-farm/my-farm-list/dashboard/RenderingMenu";
import RequestForQuote from "./pages/request/RequestForQuote";
import "./scss/global.scss";

function App() {
  return (
    <BrowserRouter>
      <ComponentProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about">
              <Route index element={<About />} />
              <Route path="service" element={<Service />} />
              {/* <Route path="counsel" element={<Counsel />} /> */}
            </Route>
            {/* <Route index element={<InfoMenu />} /> */}
            <Route path="info" element={<Info />}>
              <Route index element={<InfoMenu />} />
              {/* <Route path="usage-status" element={<UsageStatus />} />
              <Route path="simulation" element={<Simulation />} />
              <Route path="diseases" element={<Diseases />}>
                <Route index element={<DiseasesList />} />
                <Route path=":path" element={<DiseasesItem />} />
              </Route>
              <Route path="disaster" element={<Disaster />} /> */}
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="SearchEm" element={<SearchEm />} />
            <Route path="SearchPw" element={<SearchPw />} />
            <Route path="request" element={<RequestForQuote />} />
            <Route path="community" element={<Community />}>
              <Route index element={<CommunityMenu />} />
              <Route path="community:id" element={<PostView />} />
            </Route>
            <Route path="my-farm" element={<MyFarm />}>
              <Route index element={<FarmList />} />
            </Route>
            <Route path="manager" element={<Manager />} />

            {/* 관리자 */}
            <Route path="MyPage" element={<MyPage />}>
              <Route index element={<Mymain />} />
              <Route path="Myinfo" element={<Myinfo />} />
              <Route path="Chatbotinfo" element={<Chatbot />} />
              <Route path="Paymentinfo" element={<Payment />} />
              <Route path="Asinfo" element={<Asinfo />} />
              <Route path="Myletter" element={<Myletter />} />
              <Route path="Userout" element={<Userout />} />
            </Route>
          </Route>
          <Route path="/my-farm/:id" element={<DashBoard />}>
            <Route index element={<RenderingMenu />} />
          </Route>
        </Routes>
      </ComponentProvider>
    </BrowserRouter>
  );
}

export default App;
