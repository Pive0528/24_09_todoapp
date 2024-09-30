'use client';

import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Alert as MuiAlert,
  Snackbar,
  Backdrop,
  CircularProgress,
  Drawer,
  List,
  ListItemButton,
  Link,
  ListItem,
  Tabs,
  Tab,
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { FaBars } from 'react-icons/fa';
import theme from './theme';

export default function App() {
  const [tabCurrentIndex, setTabCurrentIndex] = React.useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <AppBar position="static"> */}
        <AppBar position="fixed">
          <Toolbar>
            <div className="tw-flex-1">
              <FaBars onClick={() => setOpen(true)} className="tw-cursor-pointer" />
            </div>
            <div className="logo-box">
              <a href="/" className="tw-font-bold">
                로고
              </a>
            </div>
            <div className="tw-flex-1 tw-flex tw-justify-end">글쓰기</div>
          </Toolbar>
        </AppBar>
        <section className="tw-h-96 tw-flex tw-items-center tw-justify-center tw-text-[2rem]">
          section
        </section>
      </ThemeProvider>

      <div>
        <Tabs value={tabCurrentIndex} onChange={(_, newValue) => setTabCurrentIndex(newValue)}>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
        </Tabs>
        {tabCurrentIndex == 0 && <div>내용1</div>}
        {tabCurrentIndex == 1 && <div>내용2</div>}
        {tabCurrentIndex == 2 && <div>내용3</div>}
      </div>
    </>
  );
}
