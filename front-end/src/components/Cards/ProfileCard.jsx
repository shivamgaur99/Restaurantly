import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Link,
  Avatar,
  styled,
} from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';

const RootCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#121212', 
  color: '#cda45e', 
  maxWidth: 345,
  borderRadius: '12px',
  boxShadow: '0 4px 8px #cda45e',
  margin: 'auto',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
  border: '3px solid #cda45e',
  justifySelf: 'center',
}));

const IconLink = styled(Link)(({ theme }) => ({
  color: '#cda45e',
  textDecoration: 'none',
  '&:hover': {
    color: '#a48247', 
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#cda45e',
  '&:hover': {
    color: '#a48247',
  },
  margin: theme.spacing(1),
}));

const ProfileCard = () => {
  return (
    <RootCard>
      <CardContent>
        <ProfileAvatar
          alt="Shivam Gaur"
          src="https://via.placeholder.com/SG"
        />
        <Typography variant="h5" fontWeight="bold">
          Shivam Gaur
        </Typography>
        <Typography variant="body2"  gutterBottom>
          Software Developer
        </Typography>
        <Typography variant="body2" color="#a0a0a0" paragraph>
          Passionate about building scalable web applications and exploring new technologies. Always eager to solve real-world problems through code.
        </Typography>
        <div>
          <IconLink href="https://github.com/shivamgaur99" target="_blank">
            <StyledIconButton>
              <GitHub />
            </StyledIconButton>
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/shivam1gaur/" target="_blank">
            <StyledIconButton>
              <LinkedIn />
            </StyledIconButton>
          </IconLink>
          <IconLink href="mailto:shivamgaur8527@gmail.com">
            <StyledIconButton>
              <Mail />
            </StyledIconButton>
          </IconLink>
        </div>
      </CardContent>
    </RootCard>
  );
};

export default ProfileCard;
