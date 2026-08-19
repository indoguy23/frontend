import { useEffect, useId, useMemo, useState } from "react";

import { FileUp, ImageIcon, LoaderCircle, Trash2 } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { fileUploadStyles } from "./FileUpload.styles";
import type { FileUploadProps } from "./FileUpload.types";

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const FileUpload = ({
  value,
  onChange,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024,
  disabled = false,
  loading = false,
  label = "Upload file",
  helperText,
  error,
  showPreview = true,
  className,
}: FileUploadProps) => {
  const inputId = useId();

  const [dragging, setDragging] = useState(false);

  const [internalError, setInternalError] = useState<string | null>(null);

  const previewUrl = useMemo(() => {
    if (!value || !value.type.startsWith("image/")) {
      return null;
    }

    return URL.createObjectURL(value);
  }, [value]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const validateFile = (file: File) => {
    if (file.size > maxSize) {
      return `File must be smaller than ${formatFileSize(maxSize)}.`;
    }

    return null;
  };

  const handleFile = (file?: File) => {
    if (!file) {
      return;
    }

    const validationError = validateFile(file);

    if (validationError) {
      setInternalError(validationError);

      return;
    }

    setInternalError(null);
    onChange(file);
  };

  const handleRemove = () => {
    setInternalError(null);
    onChange(null);
  };

  const resolvedError = error ?? internalError;

  return (
    <div className={cn(fileUploadStyles.container, className)}>
      <label
        htmlFor={inputId}
        className={cn(
          fileUploadStyles.dropzone,
          dragging && fileUploadStyles.dragging,
          disabled && fileUploadStyles.disabled,
          resolvedError && fileUploadStyles.invalid,
        )}
        onDragEnter={(event) => {
          event.preventDefault();

          if (!disabled && !loading) {
            setDragging(true);
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDragLeave={(event) => {
          event.preventDefault();

          setDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();

          setDragging(false);

          if (disabled || loading) {
            return;
          }

          handleFile(event.dataTransfer.files[0]);
        }}
      >
        <input
          id={inputId}
          type="file"
          accept={accept}
          disabled={disabled || loading}
          className="sr-only"
          onChange={(event) => handleFile(event.target.files?.[0])}
        />

        <div className={fileUploadStyles.iconWrapper}>
          {loading ? (
            <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />
          ) : (
            <FileUp aria-hidden="true" className="h-5 w-5" />
          )}
        </div>

        <p className={fileUploadStyles.title}>
          {loading ? "Uploading..." : label}
        </p>

        <p className={fileUploadStyles.description}>
          Drag and drop a file here, or click to browse.
        </p>

        {helperText && (
          <p className={fileUploadStyles.helperText}>{helperText}</p>
        )}
      </label>

      {resolvedError && (
        <p role="alert" className={fileUploadStyles.error}>
          {resolvedError}
        </p>
      )}

      {value && showPreview && (
        <div className={fileUploadStyles.preview}>
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={value.name}
              className={fileUploadStyles.previewImage}
            />
          ) : (
            <div
              className={cn(
                fileUploadStyles.previewImage,
                "flex items-center justify-center",
              )}
            >
              <ImageIcon
                aria-hidden="true"
                className="h-5 w-5 text-muted-foreground"
              />
            </div>
          )}

          <div className={fileUploadStyles.fileInfo}>
            <p className={fileUploadStyles.fileName}>{value.name}</p>

            <p className={fileUploadStyles.fileSize}>
              {formatFileSize(value.size)}
            </p>
          </div>

          <Button
            size="icon"
            variant="ghost"
            aria-label="Remove selected file"
            disabled={disabled || loading}
            onClick={handleRemove}
          >
            <Trash2 aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
