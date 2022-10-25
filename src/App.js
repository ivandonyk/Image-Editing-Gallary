import React, { Suspense } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Gallery from "./components/gallery/Gallery";
import { selectShowModal } from "./store/slices/editorModalSlice";
import { useSelector } from "react-redux";
import "./App.scss";

const EditorModal = React.lazy(() => import("./components/editor/EditorModal"));

function App() {
  const showModal = useSelector(selectShowModal);
  return (
    <Layout>
      <Header />
      <Gallery />
      <Suspense fallback={<div>Loading...</div>}>
        {showModal && <EditorModal />}
      </Suspense>
    </Layout>
  );
}

export default App;
