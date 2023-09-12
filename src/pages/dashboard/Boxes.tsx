import {Button, Container, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {BoxListContainer} from "../../containers/box/BoxListContainer.tsx";
import {Helmet} from "react-helmet";
import {BoxFormEditContainer} from "../../containers/box/BoxFormEditContainer.tsx";
import {BoxFormCreateContainer} from "../../containers/box/BoxFormCreateContainer.tsx";
import AddIcon from '@mui/icons-material/Add';
import {useCrudOperation} from "../../hook/useCrudOperation.ts";
import {BoxType} from "../../@types/box.ts";
import {useNavigate} from "react-router-dom";
import {BoxDeleteFormContainer} from "../../containers/box/BoxDeleteFormContainer.tsx";

const Boxes = () => {
    const navigate = useNavigate()

    const {
        selectCreateOperation,
        selectEditOperation,
        selectDeleteOperation,
        resetOperationSelection,
        operationSelectedItem,

        isCreateOperation,
        isEditOperation,
        isDeleteOperation,
        isOperationSelected
    } = useCrudOperation<BoxType>()

    const handleOnViewClick = (box: BoxType) => navigate('/boxes/detail/' + box.id)

    return (
        <Container>
            <Helmet>
                <title>Boxes</title>
            </Helmet>

            <Button
                startIcon={<AddIcon/>}
                variant='outlined'
                onClick={selectCreateOperation}>
                Create box
            </Button>

            <BoxListContainer
                onViewClick={handleOnViewClick}
                onEditClick={selectEditOperation}
                onDeleteClick={selectDeleteOperation}/>

            <Dialog
                open={isOperationSelected}
                fullWidth>
                <DialogTitle>
                    {isCreateOperation && 'Create box'}
                    {isEditOperation && 'Edit box'}
                    {isDeleteOperation && 'Delete box'}
                </DialogTitle>
                <DialogContent>
                    {isCreateOperation && (
                        <BoxFormCreateContainer
                            onSuccess={resetOperationSelection}
                            onCancel={resetOperationSelection}/>
                    )}
                    {isEditOperation && operationSelectedItem && (
                        <BoxFormEditContainer
                            boxId={operationSelectedItem.id}
                            onSuccess={resetOperationSelection}
                            onCancel={resetOperationSelection}/>
                    )}
                    {isDeleteOperation && operationSelectedItem && (
                        <BoxDeleteFormContainer
                            id={operationSelectedItem.id}
                            onSuccess={resetOperationSelection}
                            onCancel={resetOperationSelection}/>
                    )}
                </DialogContent>
            </Dialog>
        </Container>
    )
}

export default Boxes