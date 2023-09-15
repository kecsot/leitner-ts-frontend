import {useNavigate, useParams} from "react-router-dom"
import {BoxDetailContainer} from "../../../containers/box/BoxDetailContainer.tsx"
import {BoxCardListContainer} from "../../../containers/card/BoxCardListContainer.tsx";
import Page404 from "../../Page404.tsx";
import {Button, Container, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {Helmet} from "react-helmet";
import {BoxFormEditContainer} from "../../../containers/box/BoxFormEditContainer.tsx";
import {BoxDeleteFormContainer} from "../../../containers/box/BoxDeleteFormContainer.tsx";
import {useCrudOperation} from "../../../hook/useCrudOperation.ts";

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

            <Button
                variant='outlined'
                onClick={() => selectEditOperation()}>
                Edit Box
            </Button>

            <Button
                variant='outlined'
                onClick={() => selectDeleteOperation()}>
                Delete Box
            </Button>

            <BoxDetailContainer boxId={Number(id)}/>
            <BoxCardListContainer boxId={Number(id)}/>

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