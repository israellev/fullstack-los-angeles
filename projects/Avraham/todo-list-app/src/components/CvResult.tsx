
import { Box } from '@mui/material';
import { useGlobalCv } from '../global-hooks/useGlobalTodos';

interface Props {
    className?: string,
}

export function CvResult(props: Props) {
    const {} = useGlobalCv()
    return <Box className={props.className}>CvResult</Box>
}