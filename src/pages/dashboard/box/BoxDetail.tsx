import {useNavigate, useParams} from "react-router-dom"
import {BoxDetailCardContainer} from "../../../containers/box/BoxDetailCardContainer.tsx"
import {BoxCardListContainer} from "../../../containers/card/BoxCardListContainer.tsx";
import Page404 from "../../Page404.tsx";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Stack
} from "@mui/material";
import {Helmet} from "react-helmet";
import {BoxFormEditContainer} from "../../../containers/box/BoxFormEditContainer.tsx";
import {BoxDeleteFormContainer} from "../../../containers/box/BoxDeleteFormContainer.tsx";
import {useCrudOperation} from "../../../hook/useCrudOperation.ts";
import {
    BoxLeitnerSystemLevelTimelineContainer
} from "../../../containers/box/BoxLeitnerSystemLevelTimelineContainer.tsx";

const BoxDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const {
        selectEditOperation,
        selectDeleteOperation,
        resetOperationSelection,

        isEditOperation,
        isDeleteOperation,
        isOperationSelected
    } = useCrudOperation<number>()

    const handleOnDeleteSuccess = () => navigate('/boxes')

    if (!id) return <Page404/>;

    return (
        <Container>
            <Helmet>
                <title>Box detail</title>
            </Helmet>


            <Stack spacing={2}>
                <Stack
                    direction='row'
                    spacing={2}>
                    <Button
                        variant='outlined'
                        onClick={() => selectEditOperation()}>
                        Edit Box
                    </Button>

                    <Button
                        variant='outlined'
                        color='error'
                        onClick={() => selectDeleteOperation()}>
                        Delete Box
                    </Button>
                </Stack>

                <Grid spacing={2} container>
                    <Grid xs={6} item>
                        <BoxDetailCardContainer boxId={Number(id)}/>
                    </Grid>
                    <Grid xs={6} item>
                        <Card>
                            <CardHeader title='Leitner System'/>
                            <CardContent>
                                <BoxLeitnerSystemLevelTimelineContainer boxId={Number(id)}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


                <BoxCardListContainer boxId={Number(id)}/>

            </Stack>


            <Dialog
                open={isOperationSelected}
                fullWidth>
                <DialogTitle>
                    {isEditOperation && 'Edit box'}
                    {isDeleteOperation && 'Delete box'}
                </DialogTitle>
                <DialogContent>
                    {isEditOperation && (
                        <BoxFormEditContainer
                            boxId={Number(id)}
                            onSuccess={resetOperationSelection}
                            onCancel={resetOperationSelection}/>
                    )}
                    {isDeleteOperation && (
                        <BoxDeleteFormContainer
                            id={Number(id)}
                            onSuccess={handleOnDeleteSuccess}
                            onCancel={resetOperationSelection}/>
                    )}
                </DialogContent>
            </Dialog>
        </Container>
    )
}

export default BoxDetail