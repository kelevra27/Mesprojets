import React  from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'success',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export default function SearchAppBar() {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [games, setGames] = useState([]);

    // const getGames = async () => {
    //     // e.preventDefault()
    //     if (await localStorage.getItem("cart") === null) {
    //         await localStorage.setItem("cart", JSON.stringify([]))
    //     }
    //     await fetch("http://localhost:8000/games/all", {
    //         headers: {
    //             "Content-type": "application/json",
    //             "Accept": "application/json"
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => setGames(data))
    // }
  return (
        <> 
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              // onChange={event => {setSearchTerm(event.target.value)}}
            />
          </Search>
        </Toolbar>
        {/* {games.filter((val) => {
            if (searchTerm = "") {
                return val
            } else if (val.name.toLowerCase.includes(searchTerm.toLowerCase())) {

            }
        }).map((val, key) => {
            return (
                <div className='user' key={key}>
                <p>{val.name}</p>
                </div>
            )
        })} */}
        </>
          
  );
}