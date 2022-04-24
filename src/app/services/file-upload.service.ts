import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl = environment.BASE_URL_UPLOAD;

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const SysCompanyId = 1;

    const req = new HttpRequest(
      'POST',
      `${this.baseUrl}/upload/${SysCompanyId}`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
    console.info(req);
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
