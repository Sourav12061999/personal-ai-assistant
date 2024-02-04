import { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import { Box } from '@mantine/core';


function Layout({ children }: { children : ReactNode}) {

    return (
        <main>
            {/* <button onClick={authUser}>Login with Gmail</button> */}
            {/* <Navbar/> */}
            <Box display={"flex"}>
                <Sidebar />
                <Box ml={20}>
                    {children}
                </Box>
            </Box>
        </main>
    );
}

export default Layout