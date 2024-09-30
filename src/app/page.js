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
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { FaBars } from 'react-icons/fa';
import theme from './theme';

export default function App() {
  const [open, setOpen] = React.useState(false);

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
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItemButton>
              <Link underline="none" href="/write">
                글쓰기
              </Link>
            </ListItemButton>
            <ListItemButton>사과</ListItemButton>
            <ListItemButton>바나나</ListItemButton>
          </List>
        </Drawer>
      </div>
    </>
  );
}
