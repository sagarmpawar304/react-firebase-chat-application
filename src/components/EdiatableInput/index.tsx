import React, { FC, useState, useCallback } from 'react';
import { Input, Button, Row, Col } from 'antd';
import {
  EditTwoTone,
  CloseSquareTwoTone,
  CheckSquareTwoTone,
} from '@ant-design/icons';

interface Props {
  initialValue?: string;
  placeHolder?: string;
  type?: string;
  lable?: JSX.Element;
  emptyMsg?: string;
  onSave: (value: string) => Promise<void>;
}

const defaultLable = <p>Lable</p>;

/**
 *
 * @param label - Should be jsx Element
 */
const EditableInput: FC<Props> = ({
  initialValue = '',
  placeHolder = 'Please Enter value',
  lable = defaultLable,
  type = 'text',
  emptyMsg = 'Add Empty message here',
  onSave,
}) => {
  const [input, setInput] = useState<string>(initialValue);
  const [isEditable, setIsEditable] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const handleChange = useCallback((value: string) => {
    setInput(value.trim());
    setError(false);
  }, []);

  const onEditClick = useCallback(() => {
    setIsEditable(p => !p);
    setError(false);
    setInput(initialValue);
  }, [initialValue]);

  const onSaveClick = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return setError(true);
    }

    if (trimmed !== initialValue) {
      await onSave(trimmed);
    }
    setIsEditable(true);
  }, [input]);

  return (
    <>
      {lable}
      <Row>
        <Col xs={20}>
          <Input.Group>
            <Input
              type={type}
              disabled={isEditable}
              placeholder={placeHolder}
              value={input}
              onChange={e => handleChange(e.target.value)}
            />
          </Input.Group>
        </Col>
        <Col xs={2}>
          <Button.Group>
            <Button
              icon={isEditable ? <EditTwoTone /> : <CloseSquareTwoTone />}
              onClick={onEditClick}
            />
            <Button
              icon={!isEditable && <CheckSquareTwoTone />}
              onClick={onSaveClick}
            />
          </Button.Group>
        </Col>
      </Row>

      <small style={{ color: 'red' }}>{error && emptyMsg}</small>
    </>
  );
};

export default EditableInput;
