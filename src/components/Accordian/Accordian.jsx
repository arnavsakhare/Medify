import { useState } from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&::before': {
        display: 'none',
    },
    '&:not(:last-child)': {
        marginBottom: 24,
    },
}));



const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: false,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0,
    },
    padding: 0,
}));



const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
}));



const AccordianCustomized = ({data}) => {

    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
        {data.map((item, index) => (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                    <Typography
                        fontSize={16}
                        fontWeight={700}
                        color='#1B3C74'
                        lineHeight={1.2}
                    >
                        {item.summary}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        fontSize={14}
                    >
                        {item.details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
  )
}

export default AccordianCustomized