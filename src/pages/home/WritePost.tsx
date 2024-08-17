import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  FileButton,
  Flex,
  Group,
  Image,
  Text,
  Textarea,
  TextInput,
  Tooltip
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useUserStore } from "@src/stores/user.store";
import { useMemo, useState } from "react";
import {
  HiX as CloseIcon,
  HiOutlineLocationMarker as LocationIcon,
  HiOutlinePhotograph as PhotoIcon
} from "react-icons/hi";
import classes from "./WritePost.module.css";

export function WritePost() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [image, setImage] = useState<File>();
  const [showLocation, setShowLocation] = useState(false);
  const previewUrl = useMemo(
    () => (image ? URL.createObjectURL(image) : undefined),
    [image]
  );
  const { photoUrl } = useUserStore();
  const form = useForm<{
    text: string;
    image: File | undefined;
    location: string;
  }>({
    mode: "uncontrolled",
    initialValues: {
      text: "",
      image: undefined,
      location: ""
    }
  });

  const checkForm = () => {
    const { text, image } = form.getValues();

    if (text || image) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };

  return (
    <Flex className={classes.container} gap={8} p="md">
      <Avatar size="lg" src={photoUrl} />
      <Flex direction="column" flex={1}>
        <Textarea
          autosize
          key={form.key("text")}
          minRows={3}
          p={0}
          placeholder="What's on your mind?"
          size="lg"
          variant="unstyled"
          w="100%"
          {...form.getInputProps("text")}
        />
        {previewUrl && (
          <Box pt={40} style={{ position: "relative" }}>
            <Image radius={16} src={previewUrl} />
            <Tooltip label="Remove image">
              <ActionIcon
                className={classes.removePreviewButton}
                onClick={() => setImage(undefined)}
                size="lg"
              >
                <CloseIcon size={20} />
              </ActionIcon>
            </Tooltip>
          </Box>
        )}
        {showLocation && (
          <Group gap={8} pt="md">
            <Text c="dimmed" size="sm">
              from
            </Text>
            <TextInput
              classNames={{ input: classes.textInput }}
              key={form.key("location")}
              placeholder="Enter location"
              size="sm"
              variant="unstyled"
              {...form.getInputProps("location")}
            />
            <Tooltip label="Remove" position="bottom">
              <ActionIcon onClick={() => setShowLocation(false)}>
                <CloseIcon size={20} />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
        <Group justify="space-between" mt="md">
          <Group gap={8}>
            <FileButton
              accept="image/png,image/gif,image/jpeg,image/svg"
              key={form.key("image")}
              onChange={(file) => {
                setImage(file ?? undefined);
                form.setFieldValue("image", file ?? undefined);
              }}
            >
              {(props) => (
                <Tooltip label="Attach image" position="bottom">
                  <ActionIcon {...props}>
                    <PhotoIcon size={20} />
                  </ActionIcon>
                </Tooltip>
              )}
            </FileButton>
            <Tooltip label="Show location" position="bottom">
              <ActionIcon onClick={() => setShowLocation(!showLocation)}>
                <LocationIcon size={20} />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Tooltip disabled={canSubmit} label="There is nothing to post">
            <Button onMouseEnter={() => checkForm()} radius={40} size="md">
              Post
            </Button>
          </Tooltip>
        </Group>
      </Flex>
    </Flex>
  );
}
