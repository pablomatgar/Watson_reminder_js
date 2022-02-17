// Pablo Mateos García
Conversation service = new Conversation(Conversation.VERSION_DATE_2017_05_26);
service.setUsernameAndPassword("{username}",
                               "{password}");

String workspaceId = "9978a49e-ea89-4493-b33d-82298d3db20d";

InputData input = new InputData.Builder("Hello").build();
MessageOptions options = new MessageOptions.Builder(workspaceId).input(input).build();

MessageResponse response = service.message(options).execute();

System.out.println(response);
