import { NextResponse } from 'next/server';
import { addIncident } from '@/app/lib/actions/(private-routes)/notifications/actions';
export async function POST(request: Request) {
  try {
    const data = await request.json(); // Parse JSON from the request body
    const response = await addIncident(data);
    // You can process the data here
    console.log('Received data:', data);
    console.log('Received response:', response);

    // Example response
    return NextResponse.json(
      { message: 'Data received successfully!', receivedData: data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Failed to process the request', error }, { status: 500 });
  }
}
