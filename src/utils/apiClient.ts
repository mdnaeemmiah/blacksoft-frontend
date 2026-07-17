'use client';

export type UploadResponse = {
  url: string;
  publicId: string;
  secureUrl: string;
  originalFilename?: string | null;
};

export function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  if (!url) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL is not configured. Please define it in your .env file.');
  }
  return url;
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(detail || `Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export async function uploadImageToCloudinary(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${getApiBaseUrl()}/uploads/image`, {
    method: 'POST',
    body: formData,
    cache: 'no-store',
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(detail || `Upload failed with status ${response.status}`);
  }

  return response.json() as Promise<UploadResponse>;
}
