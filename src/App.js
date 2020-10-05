import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoListContainer from "./components/todoList/TodoListContainer";
import RandomQuoteContainer from "./components/ramdomQuote/RandomQuoteContainer";
import MarkdownPreviewContainer from "./components/markdownPreviewer/MarkdownPreviewContainer";
import GoogleLoginCheck from "./components/googleLogin/GoogleLoginCheck";
import LoginPage from "./components/Login/LoginPage";
import StateWiseDaily from "./components/corona/StateWiseDaily";
import ReditLogin from "./components/redit/ReditLogin";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <TodoListContainer /> */}
        {/* <LoginPage /> */}
        {/* <GoogleLoginCheck /> */}
        {/* <StateWiseDaily /> */}
        <ReditLogin />
      </div>
    </Provider>
  );
  // return (
  //   <div>
  //     {/* <RandomQuoteContainer />
  //     <MarkdownPreviewContainer /> */}
  //     {/* <GoogleLoginCheck /> */}
  //     <LoginPage />
  //   </div>
  // );
}

export default App;
