import * as React from 'react';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MenuFav() {
    return (
        <div>
          <Link to="/Favorites">
            <FavoriteBorderOutlined color="secondary" width="10px" />
          </Link>
        </div>
      );
    }
    
