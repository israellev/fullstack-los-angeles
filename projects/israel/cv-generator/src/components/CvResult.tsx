
import { Box } from '@mui/material';
import { useGlobalCv } from '../global-hooks/useGlobalCv';

interface Props {
    className?: string,
}

export function CvResult(props: Props) {
    const {cvData} = useGlobalCv()
    return <Box className={props.className}>CvResult</Box>
}